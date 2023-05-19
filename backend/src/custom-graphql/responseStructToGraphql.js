function responseStructToGraphqlRecursive(strapi, struct, result, prefix, model) {
  const typeName = `${prefix}_${model.collectionName}`;
  const currentResult = [];
  currentResult.push(`type ${typeName} {`, '  id: ID!');

  struct.fields?.forEach(field => {
    if (field === 'id') {
      return;
    }

    const modelField = model.attributes[field];

    if (!modelField) {
      throw new Error(`Field ${field} not present on ${model.collectionName}`);
    }

    const fieldType = {
      'json': 'JSON',
      'integer': 'Int',
      'boolean': 'Boolean',
      'datetime': 'DateTime',
      'date': 'Date',
      'string': 'String',
      'text': 'String',
      'enumeration': `ENUM_${model.globalId.toUpperCase()}_${field.toUpperCase()}`
    }[modelField.type];

    if (!fieldType) {
      throw new Error(`Unknown field type ${fieldType} is present on ${model.collectionName}`);
    }

    currentResult.push(`  ${field}: ${fieldType}${modelField.required ? '!' : ''}`);
  });

  Object.keys(struct.populate ?? {}).forEach(field => {
    const modelField = model.attributes[field];

    if (!modelField) {
      throw new Error(`Relation field ${field} not present on ${model.collectionName}`);
    }

    if (modelField.type !== 'relation') {
      return;
    }

    const nestedModel = strapi.getModel(modelField.target);

    const fieldSingleType = responseStructToGraphqlRecursive(
      strapi,
      struct.populate[field],
      result,
      `${prefix}_${field}`,
      nestedModel
    );

    const isMany = new Set(['manyToMany', 'oneToMany']).has(modelField.relation);
    const fieldType = isMany ? `[${fieldSingleType}!]` : fieldSingleType;

    currentResult.push(`  ${field}: ${fieldType}`);
  });

  currentResult.push('}');

  result.push('', ...currentResult);

  return typeName;
}

module.exports = function responseStructToGraphql(strapi, struct, prefix, uid) {
  const typeDefs = [];

  const typeName = responseStructToGraphqlRecursive(
    strapi,
    struct,
    typeDefs,
    prefix,
    strapi.getModel(uid)
  );

  return {
    typeName,
    typeDefs: typeDefs.join('\n'),
  };
}

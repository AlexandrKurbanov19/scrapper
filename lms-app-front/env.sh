#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

if [ -z "${1}" ]; then
  echo "Укажи первым аргументом production или development для которой собирается env файл"
  exit
fi

tmp0=$(mktemp)
tmp1=$(mktemp)

# порядок важен, сначала самые важные
FILE=.env.${1}
if [ -f "$FILE" ]; then
  echo "combine $FILE"
  cat ${FILE} >> ${tmp0}
fi

if [ -f ".env.local" ]; then
  echo "combine .env.local"
  cat .env.local >> ${tmp0}
fi

if [ -f ".env" ]; then
  echo "combine .env"
  cat .env >> ${tmp0}
fi

# Удаляем комменты и дубли
awk -F "=" '!a[$1]++' ${tmp0} | grep -o '^[^#]*' > ${tmp1}

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
if printf '%s\n' "$line" | grep -q -e '='; then
varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
fi

# Read value of current variable if exists as Environment variable
value=$(printf '%s\n' "${!varname}")
# Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
echo "  $varname: \"$value\"," >> ./env-config.js
done < ${tmp1}

echo "}" >> ./env-config.js

rm ${tmp0}
rm ${tmp1}

cat ./env-config.js

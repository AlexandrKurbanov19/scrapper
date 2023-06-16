import React, { FC } from 'react';
import styles from './SectionNameComponent.module.scss';

interface ISectionNameComponent {
  sectionName: string,
  className?: string,
}

const SectionNameComponent: FC<ISectionNameComponent> = (
  {
    sectionName,
  },
) => (
  <span className={styles.sectionName}>
    {sectionName}
  </span>
);

export default SectionNameComponent;

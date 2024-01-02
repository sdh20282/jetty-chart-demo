import { useEffect, useState } from 'react';

import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';
import ColorDropbox from '@/components/dropbox/color-dropbox/ColorDropbox';

import styles from './color-palette-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';
import { colorPalette } from '@/utils/color/colorPalette';

const ColorPaletteFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const [selected, setSelected] = useState(Object.keys(colorPalette)[0]);
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  useEffect(() => {
    if (!selected) {
      return;
    }

    const newData = JSON.parse(JSON.stringify(chartData));

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]] = colorPalette[selected];
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]] = colorPalette[selected];
    }

    setChartData(newData);
  }, [selected]);

  if (!display) {
    return;
  }

  const nowValue = targetParse.length === 2
    ? chartData[targetParse[0]][targetParse[1]]
    : chartData[targetParse[0]][targetParse[1]][targetParse[2]];

  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      <ColorDropbox props={{ list: Object.keys(colorPalette), target: selected, callback: setSelected, value: nowValue }} />
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default ColorPaletteFieldset;
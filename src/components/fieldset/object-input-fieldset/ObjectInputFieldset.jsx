import FieldsetTitle from "@/components/text/fieldset-title/FieldsetTitle";
import NumberInput from "@/components/input/number-input/NumberInput";

import styles from './obejct-input-fieldset.module.css';

import { checkDependency } from "@/utils/common/dependency";

const ObjectInputFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleChange = ({ e, target, type }) => {
    const newData = JSON.parse(JSON.stringify(chartData));
    let value = e.target.value;

    if (type === "number") {
      if (isNaN(e.target.value)) {
        return;
      }
  
      value = Number(value);
    }

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]][target] = value;
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]][target] = value;
    }

    setChartData(newData);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      <ul className={styles.objectList}>
        {
          data.objectProperties.map((property, idx) => {
            if (data.objectPropertiesType[idx] === "number") {
              return (
                <li key={property}>
                  <p className={styles.objectPropertyDescription}>{property}</p>
                  <NumberInput props={{ 
                    id: `${data.name}-${property}-input`, 
                    name: data.name, 
                    unit: data.objectPropertiesUnit[idx],
                    value: 
                      targetParse.length === 2 
                      ? chartData[targetParse[0]][targetParse[1]][property] 
                      : chartData[targetParse[0]][targetParse[1]][targetParse[2]][property],
                    onChange: (e) => { handleChange({ e, target: property, type: data.objectPropertiesType[idx] }) } }}  />
                </li>
              )
            }
          })
        }
      </ul>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default ObjectInputFieldset;
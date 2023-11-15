import { useEffect, useState } from 'react';

import styles from './color-dropbox.module.css'
import { colorPalette } from '@/utils/color/colorPalette';

const ColorDropbox = ({ props: { list, target, callback } }) => {
  const [clicked, setClicked] = useState(false);

  // 드랍 다운 버튼 클릭
  const onClickButton = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setClicked(!clicked);
  }

  // 드랍 박스 이외의 영역을 눌렀을 때
  window.addEventListener("click", () => {
    setClicked(false);
  })

  // 드랍 박스 리스트 버튼 클릭
  const onClickListButton = ({ e, target }) => {
    e.preventDefault();

    callback(target);
  }

  // 타겟 값 변경 시
  useEffect(() => {
    setClicked(false);
  }, [target]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.button} ${clicked ? styles.clicked : null}`}onClick={onClickButton}>
        <div className={styles.buttonTitle}>{target}</div>
        <ul className={styles.colorList}>
          {
            colorPalette[target].map((color, idx) => {
              return (
                <li key={`${color}-${idx}`} >
                  <div style={{ backgroundColor: color }} className={styles.colorItem}></div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <ul className={`${styles.list} ${clicked ? styles.clicked : null}`} onClick={(e) => {e.stopPropagation();}}>
        {
          list.map(item => {
            return (
              <li className={styles.listItem} key={item}>
                <div className={styles.listButton} onClick={(e) => {onClickListButton({ e, target: item })}}>
                  <div className={styles.buttonTitle}>{item}</div>
                  <ul className={styles.colorList}>
                    {
                      colorPalette[item].map((color, idx) => {
                        return (
                          <li key={`${color}-${idx}`} >
                            <div style={{ backgroundColor: color }} className={styles.colorItem}></div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default ColorDropbox;
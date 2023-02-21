import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/colorpicker';
export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.stat_list}>
                {stats.map(el => {
                    return (
                        <li className={css.item}
                            key={el.id}
                            style={{ backgroundColor: getRandomHexColor() }}
                        >
                        
                            <span className={css.label}>{el.label}</span>
                            <span className={css.percentage}>{el.percentage}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
   
}

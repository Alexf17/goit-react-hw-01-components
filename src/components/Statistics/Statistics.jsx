import { StatisticItem } from "./StatisticItem";
import {Title} from './StatisticTitle'
import { Section, List, Item } from './Statistics.styled'

export const Statistics = ({ statistics, title }) => {
    return (
        <Section>
        {title && <Title title={title} />}
    <List>
          {statistics.map(({ id, label, percentage }) => 
           <Item key={id}>
              <StatisticItem label={label} percentage={percentage} />
    </Item>
          )}
   
  </List>
</Section>
    )
}
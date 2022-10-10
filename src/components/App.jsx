import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Conteiner } from './App.styled';
import profile from '../Json/user.json';
import statistics from '../Json/data.json';
import friends from '../Json/friends.json';
import transactions from '../Json/transactions.json';


export const App = () => {
  return (
    <Conteiner>
      <Profile profile={profile} />
      <Statistics statistics={statistics} title="upload text" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Conteiner>
  );
};



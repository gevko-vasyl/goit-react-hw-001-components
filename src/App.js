import Profile from './components/Profile/Profile';
import ProfileData from './components/Profile/ProfileData.json';

import Statistics from './components/Statistics/Statistics';
import StatisticsData from './components/Statistics/Statistics.json';

import FriendList from './components/FriendList/FriendList';
import FriendListData from './components/FriendList/FriendList.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionHistoryData from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={ProfileData.name}
        tag={ProfileData.tag}
        location={ProfileData.location}
        avatar={ProfileData.avatar}
        followers={ProfileData.stats.followers}
        views={ProfileData.stats.views}
        likes={ProfileData.stats.likes}
      />
      <Statistics title="My statistic" stats={StatisticsData} />
      <FriendList friends={FriendListData} />
      <TransactionHistory items={transactionHistoryData} />
    </>
  );
}

export default App;

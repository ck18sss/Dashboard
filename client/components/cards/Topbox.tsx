import { topDealUsers } from "./Data";

const TopBox = () => {
  return (
    <div className="topBox h-97 overflow-y-auto">
      <h1 className="text-lg mb-3 xl:text-xl font-bold">Top Deals</h1>
      <div className="list space-y-2">
        {topDealUsers.map((user) => (
          <div className="listItem flex items-center justify-between mb-3" key={user.id}>
            <div className="user flex items-center gap-3">
              <img className="w-8 h-8 rounded-full object-cover hidden lg:block" src={user.img} alt="" />
              <div className="userTexts flex flex-col gap-1">
                <span className="text-xxs font-medium">{user.username}</span>
                <span className="text-xs hidden lg:block text-light-1">{user.email}</span>
              </div>
            </div>
            <span className="text-xxs font-medium text-light-1">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

//toggleDark function은 argument를 받지 않고, 아무것도 return하지 않는다
//이게 이 함수의 타입
interface IRouterProps {}
function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;

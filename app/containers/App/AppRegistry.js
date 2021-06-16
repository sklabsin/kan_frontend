import UserRegistry from '../User/UserRegistry';
import HomeRegistry from '../Home/HomeRegistry';
import MenuRegistry from '../Menu/MenuRegistry';
import DivisionRegistry from '../Division/DivisionRegistry';
import GroupRegistry from '../Group/GroupRegistry';
const AppRegistry = {
    ...UserRegistry,
    ...HomeRegistry,
    ...MenuRegistry,
    ...DivisionRegistry,
    ...GroupRegistry
}

export default AppRegistry;
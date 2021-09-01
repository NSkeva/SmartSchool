import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './login';
import Library from './library';
import MainMenu from './mainMenu';

const Stack=createStackNavigator({
    Login:{
        screen: Login,
        
    },
    MainMenu:{
        screen: MainMenu
    },
    Library:{
        screen: Library
    },
}
    
);
const StackNavigator = createAppContainer(Stack);
export default StackNavigator;

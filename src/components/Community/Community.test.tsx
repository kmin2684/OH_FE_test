import { render } from "@testing-library/react";
import Community from './Community'
import { Provider } from "react-redux";
import {store} from '../../store/index';


test("<Community/> renders correctly", () => {

    const community = {
        avgPrice: '$300',
        imgUrl: '',
        name: 'dummy',
        id: '11'
    }

    const component = render(
        <Provider store={store}>
            <Community community={community} hidden={false}/>
        </Provider>
    )

  expect(component).toBeTruthy();
});
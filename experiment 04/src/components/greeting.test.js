import{render} from '@testing-library/react';
import Greeting from './greeting';

test("matched snapshot",()=>{
    const{container}=render(<Greeting name="Ayush"/>);
    expect(container).toMatchSnapshot();
})
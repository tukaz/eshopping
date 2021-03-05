import React from 'react';
import sections from './sections';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();
        this.state = {
            sections: sections
        }
    }  

    render(){
        const {sections} = this.state;
        return(
            <div className='directory-menu'>
                {sections.map((section) => (
                    <MenuItem key={section.id} {...section} />
                ))}
            </div>
        )

    }
}

export default Directory;
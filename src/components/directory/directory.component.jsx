import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';
import {selectSections} from '../../redux/directory/directory-selectors'
import './directory.styles.scss';

const Directory = ({sections}) => {
    return(
        <div className='directory-menu'>
            {sections.map((section) => (
                <MenuItem key={section.id} {...section} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        sections: selectSections
    }
)

export default connect(mapStateToProps)(Directory);
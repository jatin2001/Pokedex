import React ,{Component} from 'react';


class SearchList extends Component
{   
    
    render()
    {   
       return(
            <div className='tc'>
                <input className='pa3 ba b--green bg-lightest-blue' type="search" placeholder='Search Pokemon' onChange={this.props.searchChange} />
            </div>
       )
    }
}

export default SearchList;
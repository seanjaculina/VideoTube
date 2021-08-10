import React from 'react';

class SearchBar extends React.Component{
    state = {
        searchVal: '',

    };


    onInputChange = (e) =>{
        this.setState({searchVal: e.target.value})
    }

    onFormSubmit = (e) =>{
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchVal);
}

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>
                        Video Search
                    </label>
                    <input type="text" value={this.state.searchVal} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const SEARCH_TERM = 'BTS';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        }
    }

    componentDidMount(){
        this.onTermSubmit(SEARCH_TERM);
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params : {
                q: term
            }
        });
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar  onFormSubmit={this.onTermSubmit} defaultSearchTerm={SEARCH_TERM}/>
                <div className="ui grid" >
                    <div className="ui row" >
                        <div className="eleven wide column" > 
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /> 
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}
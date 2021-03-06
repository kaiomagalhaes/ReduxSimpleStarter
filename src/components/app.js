import React, { Component } from 'react'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import _ from 'lodash'

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyD92FMy4JyRnLak_HHZ1B74sD6UAvB-ViE'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('dragon ball z')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch }/>
        <VideoDetail 
          video={this.state.selectedVideo} 
        />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => { this.setState({selectedVideo})}}
        />
      </div>
    )
  }
}

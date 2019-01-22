import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList = () => {
        if (!this.props.songs)
            return <div>Loading...</div>

        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ songs: { songs } }) => {
    return {
        songs
    };
}

//two brackets in javascript means a function is returning another function inside of it
export default connect(mapStateToProps, {
    selectSong
})(SongList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList = () => {
        if (!this.props.songs)
            return <div>Loading...</div>
        if (this.props.error) {
            return (
                <div className="ui negative message">
                    <i className="close icon"></i>
                    <div className="header">
                        Issue with the API
                </div>
                    <p>{this.props.error}</p>
                </div>
            )
        }
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

const mapStateToProps = ({ songs: { songs, error } }) => {
    console.log('error', error);
    return {
        songs,
        error
    };
}

//two brackets in javascript means a function is returning another function inside of it
export default connect(mapStateToProps, {
    selectSong
})(SongList);



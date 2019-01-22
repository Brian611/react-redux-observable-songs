import React from 'react'
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if (!song)
        return <div>Please select song</div>

    const { title, userId } = song;
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {title}
                <br />
                User ID: {userId}
            </p>
        </div>
    )
}

const mapStateToProps = ({ songs: { song } }) => {
    return {
        song
    }
}

export default connect(mapStateToProps)(SongDetails);

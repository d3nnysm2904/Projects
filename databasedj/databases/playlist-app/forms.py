
from wtforms import SelectField, StringField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    name = StringField("Name", validators=[InputRequired(), Length(min=5,max=80)])
    description = StringField("Description", validators=[InputRequired(), Length(min=5,max=80)])


class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form

    title = StringField("Title", validators=[
                        InputRequired(), Length(min=3, max=50)])
    artist = StringField("Artist", validators=[
                        InputRequired(), Length(min=3, max=50)])


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)

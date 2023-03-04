from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField,BooleanField
from wtforms.validators import InputRequired


class UserForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired()])
    password = PasswordField("Password", validators=[InputRequired()])
    checkbox = BooleanField('See Password', id='check',render_kw={
                            "class": " btn "})

class TweetForm(FlaskForm):
    text = StringField("Tweet Text", validators=[InputRequired()])

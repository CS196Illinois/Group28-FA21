from flask import Flask, render_template, request, redirect, url_for
from forms import Todo
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'password'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tmp/test.db'
db = SQLAlchemy(app)

class TodoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(240))

    def __str__(self):
        return f'{self.content}, {self.id}'

db.create_all()
db.session.commit()
todo = TodoModel(content='I want to eat')
db.session.add(todo)
db.session.commit()

@app.route('/', methods=['GET', 'POST'])
def basic():
    request_method = request.method
    todo = TodoModel.query.all()
    if request.method == 'POST':
        first_name = request.form['first_name']
        return redirect(url_for('name', first_name = first_name))
    return render_template('other.html', request_method = request_method, todo=todo)
   
@app.route('/name/<string:first_name>')
def name(first_name):
    return f'{first_name}'

@app.route('/todo', methods=['GET', 'POST'])
def todo():
    todo_form = Todo()
    if todo_form.validate_on_submit():
        todo = TodoModel(content=todo_form.content.data)
        db.session.add(todo)
        db.session.commit()
        return redirect('/')
    return render_template('todo.html', form=todo_form)

@app.route('/asf')
def index():
    return render_template('about.html', list_of_names=['one', 'two', 'three'])

@app.route('/awerkojawer')
def greet(name):
    return f'Hello {name}'

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
@app.route("/index", methods=["GET", "POST"])
def index():
    return render_template("/index.html")

@app.route("/images", methods=["GET", "POST"])
def images():
    return render_template("/images.html")

@app.route("/advanced", methods=["GET", "POST"])
def advanced():
    return render_template("/advanced.html")


    
app.add_url_rule("/index.html", "index", index)
app.add_url_rule("/images.html", "images", images)
app.add_url_rule("/advanced.html", "advanced", advanced)

if __name__ == "__main__":
    app.run(debug=True, port="5000")
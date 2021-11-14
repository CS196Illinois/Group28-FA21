from transformers import pipeline
from flask import Flask, render_template, redirect
import requests
from sentiment import getPositivityRatio

def toLinks(arraySongs, arrayArtists):
    len = len(arraySongs)
    linkArr = [0]*len
    for i in range(len)
        linkArr[i] = "https://www.azlyrics.com/lyrics/" + arrayArtists[i] + "/" + arraySongs[i] + ".html"
    return linkArr

def sentimentOFPlaylist(arrayOfLinks):
    totalPercentage = 0
    for song in array :
        totalPercentage += getPositivityRatio(song)
    return totalPercentage / len(arrayOfLinks)

@app.route('/', methods=['GET', 'POST'])
def basic():
    return render_template('index.html', songToUse = "https://www.azlyrics.com/lyrics/pharrellwilliams/happy.html")

@app.route('/<string:link>', methods=['GET', 'POST'])
    def index(link):
        return render_template('index.html', songToUse = link)

if __name__ == '__main__':
    app.run(debug=True)
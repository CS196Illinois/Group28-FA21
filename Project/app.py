from flask import Flask, render_template
import requests
from sentiment import getPositivityRatio

app = Flask(__name__)

def toArtist(name):
    baseLink = "https://search.azlyrics.com/search.php?q="
    nameWords = name.lower().split(" ")
    for str in nameWords:
        baseLink += str + "+"

    link = baseLink[0: len(baseLink) - 1]

    x = requests.get(link)
    rawtxt = x.text.lower()

    tag = "</span> - <b>"
    endTag = "</b></a>"
    index = rawtxt.find(tag)
    endIndex = rawtxt.find(endTag, index)


    artist = rawtxt[index + len(tag) : endIndex]
    return artist

def toArtists(songs):
    l = len(songs)
    artistsArr = [0]*l
    for i in range(l):
        artistsArr[i] = toArtist(songs[i])
    return artistsArr


def toLinks(arraySongs, arrayArtists):
    l = len(arraySongs)
    linkArr = [0]*l
    for i in range(l):
        linkArr[i] = "https://www.azlyrics.com/lyrics/" + arrayArtists[i] + "/" + arraySongs[i] + ".html"
    return linkArr

def sentimentOfPlaylist(arrayOfLinks):
    totalPercentage = 0
    for song in arrayOfLinks:
        totalPercentage += getPositivityRatio(song)
    return totalPercentage / len(arrayOfLinks)

@app.route('/', methods=['GET', 'POST'])
def basic():
    return render_template('test.html', s = 69420)

@app.route('/<string:songs>', methods=['GET', 'POST'])
def index(songs):
    arrSongs = songs.split(",")
    arrArtists = toArtists(arrSongs)
    print(arrSongs)
    print(arrArtists)
    sentiment = sentimentOfPlaylist(toLinks(arrSongs, arrArtists))
    return render_template('test.html', s = sentiment)

if __name__ == '__main__':
    app.run(debug=True)

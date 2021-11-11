from transformers import pipeline
import requests

def getPositivityRatio(link): 
    classifier = pipeline("sentiment-analysis")
    x = requests.get(link)
    rawtxt = x.text
    begg = "Sorry about that. -->"
    idx = rawtxt.find(begg)
    endidx = rawtxt.find("</div>", idx)
    lyrics = rawtxt[idx + len(begg) : endidx]
    splicedlyrics = lyrics.split('<br>\n')
    countnegative = 0
    countpositive = 0

    for line in splicedlyrics:
        c = classifier(line)
        type = c[0]["label"]
        if type == "POSITIVE":
            countpositive += 1
        else:
            countnegative += 1

    return countpositive / (countpositive + countnegative)

print(getPositivityRatio("https://www.azlyrics.com/lyrics/pharrellwilliams/happy.html"))
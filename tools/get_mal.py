import requests
from bs4 import BeautifulSoup as bs
import ast
import csv
from tqdm import tqdm
from multiprocessing import Pool

def get_avg(link):
    avg_rating = bs(requests.get(link).content, "lxml").find('span', attrs={"itemprop":"ratingValue"}).text.strip()
    return avg_rating


csv_file = "../_data/myanimelist.csv"
csv_writer = csv.writer(open(csv_file, 'w', newline='', encoding='utf-8'), delimiter=',', quotechar='"')

url = "https://myanimelist.net/animelist/SearyBlue?status=2"
page = requests.get(url)
soup = bs(page.content, "lxml")

links = []
data = []
for tag in tqdm(soup.find_all('a', attrs={"class": "animetitle"})):
    links.append("https://myanimelist.net" + tag['href'])
    data.append([tag.text.strip(), tag.find_next('span').find_next('span').text.strip()])

avg_ratings = tqdm(Pool().imap(get_avg, links), total=len(links))
for (i,datum),r in zip(enumerate(data), avg_ratings):
    data[i].append(r)
    data[i].append(links[i])
data = [["Anime Title","My Rating","MAL Rating","Link"]] + data
csv_writer.writerows(data)


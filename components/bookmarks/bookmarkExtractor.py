import re
import html
import json

descriptions = []
urls = []
result = {}
with open ("bookmarkLinks.html", "r") as myfile:
	sites = myfile.readlines()
	for site in sites:
		site = html.unescape(site)
		descriptions += re.findall('\">(.*?)</A>', site, re.DOTALL)
		urls += re.findall('HREF=\"(.*?)\"', site, re.DOTALL)

for i in range(0, len(urls)): 
	result[urls[i]] = descriptions[i]

with open("bookmarkResults.json", 'w') as outfile:
    outfile.write(json.dumps(result, indent=4, separators=(',', ': ')))

print (json.dumps(result, indent=4, separators=(',', ': ')))

myfile.close()
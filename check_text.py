import os
import re

components_dir = 'src/components'
for filename in os.listdir(components_dir):
    if not filename.endswith('.jsx'): continue
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = re.findall(r'className="([^"]*)"', content)
    for classes in matches:
        if 'text-' in classes and 'dark:text-' not in classes:
            print(f'{filename}: {classes}')

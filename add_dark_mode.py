import os
import re

components_dir = "src/components"

replacements = [
    # Transparent backgrounds
    (r'bg-white/(\d+)(?! dark:)', r'bg-white/\1 dark:bg-slate-900/\1'),
    (r'bg-brand-light/(\d+)(?! dark:)', r'bg-brand-light/\1 dark:bg-[#0A0F1A]/\1'),
    
    # Text colors that might be missed
    (r'text-brand-blue/(\d+)(?! dark:)', r'text-brand-blue/\1 dark:text-slate-300'),
    (r'text-brand-blue(?!/|-| dark:)', r'text-brand-blue dark:text-slate-100'),
]

for filename in os.listdir(components_dir):
    if not filename.endswith('.jsx'):
        continue
    if filename == 'Navbar.jsx':
        continue # Already updated
        
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
        
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")

import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Extract Mitra Marungga section
mitra_match = re.search(r'(\s*\{/\* Mitra Marungga \*/\}.*?</section>)', content, re.DOTALL)
mitra_section = mitra_match.group(1)

# Remove it from its original place
content = content.replace(mitra_section, '')

# 2. Find Fokus Gerakan Kami section end
# It ends right before "{/* Latest Programs Snippet */}"
insert_pos = content.find('      {/* Latest Programs Snippet */}')

# Insert Mitra Marungga there
content = content[:insert_pos] + mitra_section.lstrip('\n') + '\n\n' + content[insert_pos:]

# 3. Fix background colors for alternating pattern
# Mitra Marungga is already bg-surface-alt
# Latest Programs Snippet change to bg-background
content = content.replace('className="section bg-surface-alt relative"', 'className="section bg-background relative"')

# Produk Riset change to bg-surface-alt
content = content.replace('{/* Produk Riset & Dokumentasi */}\n      <section className="section bg-background">', '{/* Produk Riset & Dokumentasi */}\n      <section className="section bg-surface-alt">')

# Galeri Video remains bg-background
# (it is already '{/* Galeri Dokumentasi Video */}\n      <section className="section bg-background">')

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Done rearranging sections.")

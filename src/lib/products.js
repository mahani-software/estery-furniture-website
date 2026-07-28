// Estery Furniture product catalog. All images sourced from Unsplash (free to use).

export const categories = [
  { slug: "living-room", name: "Living Room", desc: "Sofas, sectionals & lounge chairs" },
  { slug: "bedroom", name: "Bedroom", desc: "Beds, wardrobes & nightstands" },
  { slug: "dining", name: "Dining", desc: "Tables, chairs & sideboards" },
  { slug: "office", name: "Office", desc: "Desks, executive chairs & storage" },
  { slug: "outdoor", name: "Outdoor", desc: "Patio sets, loungers & garden pieces" },
  { slug: "accessories", name: "Accessories", desc: "Lighting, rugs, mirrors & décor" },
];

// Unsplash image IDs — high quality, curated furniture photography
export const products = [
  { id: "esf-001", name: "Kabalega Emerald Velvet Sofa", category: "living-room", price: 4200000, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80", desc: "A statement three-seater upholstered in deep emerald velvet with hand-turned brass legs. Sculpted in our Kampala workshop." },
  { id: "esf-002", name: "Rwenzori Curved Sectional", category: "living-room", price: 6800000, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80", desc: "An eight-seat modular sectional in soft bouclé — the anchor of a modern Ugandan living room." },
  { id: "esf-003", name: "Nile Boucle Lounge Chair", category: "living-room", price: 1450000, img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80", desc: "Sculptural lounge chair with a swivel base and cloud-soft bouclé upholstery." },
  { id: "esf-004", name: "Ssese Walnut Coffee Table", category: "living-room", price: 980000, img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1400&q=80", desc: "Solid walnut with a beveled edge and hand-oiled finish. Seats a full afternoon of conversation." },
  { id: "esf-005", name: "Bwindi Reading Nook Armchair", category: "living-room", price: 1750000, img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1400&q=80", desc: "Deep-buttoned wingback armchair upholstered in tobacco leather." },

  { id: "esf-101", name: "Mutima King Platform Bed", category: "bedroom", price: 5200000, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80", desc: "A low-profile king platform bed with a channel-tufted headboard in natural linen." },
  { id: "esf-102", name: "Buganda Canopy Bed", category: "bedroom", price: 7400000, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80", desc: "Four-poster canopy bed in reclaimed mahogany — a heirloom centerpiece." },
  { id: "esf-103", name: "Karamoja Cane Wardrobe", category: "bedroom", price: 3900000, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1400&q=80", desc: "Six-door wardrobe with woven cane panels and soft-close hinges." },
  { id: "esf-104", name: "Jinja Oak Nightstand", category: "bedroom", price: 620000, img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=80", desc: "Two-drawer nightstand with brushed brass pulls." },
  { id: "esf-105", name: "Entebbe Linen Bench", category: "bedroom", price: 780000, img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80", desc: "Upholstered end-of-bed bench in stone-washed linen." },

  { id: "esf-201", name: "Kampala Live-Edge Dining Table", category: "dining", price: 5600000, img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80", desc: "Ten-seat live-edge dining table cut from a single slab of Ugandan mvule wood." },
  { id: "esf-202", name: "Masaka Rattan Dining Chair", category: "dining", price: 420000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1400&q=80", desc: "Hand-woven rattan back with solid teak frame. Sold individually." },
  { id: "esf-203", name: "Fort Portal Round Bistro Table", category: "dining", price: 1250000, img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1400&q=80", desc: "Round marble-top bistro table with a fluted pedestal base." },
  { id: "esf-204", name: "Mbarara Oak Sideboard", category: "dining", price: 3200000, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80", desc: "Six-door sideboard with adjustable interior shelving and integrated cable management." },
  { id: "esf-205", name: "Kigezi Bar Cart", category: "dining", price: 890000, img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80", desc: "Two-tier brass bar cart with smoked glass shelves." },

  { id: "esf-301", name: "Nakawa Executive Desk", category: "office", price: 3800000, img: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1400&q=80", desc: "Solid walnut executive desk with leather inlay and hidden cable trays." },
  { id: "esf-302", name: "Muyenga Ergonomic Task Chair", category: "office", price: 1650000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1400&q=80&sat=-40", desc: "Fully adjustable ergonomic chair with breathable mesh and lumbar support." },
  { id: "esf-303", name: "Kololo Library Bookcase", category: "office", price: 4200000, img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80", desc: "Floor-to-ceiling five-shelf bookcase in stained ash." },
  { id: "esf-304", name: "Bugolobi Filing Credenza", category: "office", price: 2100000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80", desc: "Low credenza with locking file drawers and a smoked glass top." },

  { id: "esf-401", name: "Munyonyo Teak Lounger", category: "outdoor", price: 1950000, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80", desc: "Weather-resistant teak lounger with reclining back and quick-dry cushion." },
  { id: "esf-402", name: "Ngamba Patio Dining Set", category: "outdoor", price: 5400000, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80", desc: "Six-seat patio set with powder-coated aluminum frame and Sunbrella cushions." },
  { id: "esf-403", name: "Sipi Rope Hanging Chair", category: "outdoor", price: 1350000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80", desc: "Hand-braided rope hanging chair with a solid steel frame." },
  { id: "esf-404", name: "Lake Victoria Fire Pit Table", category: "outdoor", price: 2800000, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80", desc: "Concrete-top propane fire pit table with an integrated wind guard." },

  { id: "esf-501", name: "Serena Brass Floor Lamp", category: "accessories", price: 780000, img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80", desc: "Adjustable brass arc floor lamp with a linen drum shade." },
  { id: "esf-502", name: "Karuma Handwoven Rug 8x10", category: "accessories", price: 1400000, img: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1400&q=80", desc: "Hand-knotted wool rug from Karuma weavers, in warm ivory and umber." },
  { id: "esf-503", name: "Kabaka Round Wall Mirror", category: "accessories", price: 520000, img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80", desc: "48-inch round mirror with an antique brass frame." },
  { id: "esf-504", name: "Nyanza Ceramic Vase Set", category: "accessories", price: 240000, img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=80", desc: "Set of three hand-thrown ceramic vases in matte terracotta." },
  { id: "esf-505", name: "Aketch Pendant Chandelier", category: "accessories", price: 1850000, img: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1400&q=80", desc: "Seven-globe brass pendant chandelier — ideal above a dining table." },
  { id: "esf-506", name: "Bujagali Woven Basket Trio", category: "accessories", price: 320000, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80&sat=-30", desc: "Set of three hand-woven storage baskets in natural sisal." },
];

export const getProduct = (id) => products.find((p) => p.id === id);
export const getByCategory = (slug) => products.filter((p) => p.category === slug);

export const formatUGX = (n) =>
  new Intl.NumberFormat("en-UG", { style: "currency", currency: "UGX", maximumFractionDigits: 0 }).format(n);

// Extra gallery imagery for the showroom / gallery pages
export const galleryImages = [
  "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616627451515-c3a9c9d1e5a5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616627791224-72cba552b45d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1400&q=80",
];
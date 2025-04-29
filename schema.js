const mongoose = require('mongoose');

// Vendor Schema (Company Level)
const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true, unique: true },
  contactEmail: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    country: { type: String, default: 'India' },
    zipCode: String
  },
  businessRegistrationNumber: String, // GST/VAT etc.
  registeredAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'suspended'], 
    default: 'active' 
  }
});

// Seller/Store Schema (Individual Shop Level)
const sellerSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  vendor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Vendor', 
    required: true 
  },
  shopName: { type: String, required: true },
  shopSlug: { type: String, unique: true }, // For URLs
  contactEmail: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    country: { type: String, default: 'India' },
    zipCode: String,
  
  },
  categories: [string1, string2],
  joinedAt: { type: Date, default: Date.now },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'under_review'], 
    default: 'active' 
  }
});

// User Schema (Common for all roles)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true, select: false },
  addresses: [{
    type: {
      street: String,
      city: String,
      state: String,
      country: { type: String, default: 'India' },
      zipCode: String,
      isDefault: Boolean
    }
  }],
  role: { 
    type: String, 
    enum: ['customer', 'seller', 'admin', 'vendor_admin'], 
    default: 'customer' 
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

// Product Schema (Linked to Seller)
const productSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  images: [String],
  attributes: mongoose.Schema.Types.Mixed, // For variable product attributes
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

// Export models
module.exports = {
  Vendor: mongoose.model('Vendor', vendorSchema),
  Seller: mongoose.model('Seller', sellerSchema),
  User: mongoose.model('User', userSchema),
  Product: mongoose.model('Product', productSchema)
};
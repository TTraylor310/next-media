import { Schema, model, models } from 'mongoose';


const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    }
  },
  beds: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  square_feet: {
    type: Number,
    required: true
  },
  amenities: [
    {
      type: String
    }
  ],
  rates: {
    nightly: {
      type: Number,
      required: false
    },
    weekly: {
      type: Number,
      required: false
    },
    monthly: {
      type: Number,
      required: false
    }
  },
  seller_info: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  images: [
    {
      type: String
    }
  ],
  is_featured: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})



const Property = models.Property || model('Property', PropertySchema)
export default Property
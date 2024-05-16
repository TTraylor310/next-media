import connectDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB()
    const property = await Property.findById(params.id)
    if (!property) {
      return new Response('Property not found', { status: 404 })
    }
    return new Response(JSON.stringify(property), { status: 200 })
  } catch (error) {
    return new Response('Error getting properties', { status: 500 })
  }
}

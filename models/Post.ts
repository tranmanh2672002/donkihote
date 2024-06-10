import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);

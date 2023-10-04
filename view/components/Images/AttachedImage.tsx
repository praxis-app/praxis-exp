import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AttachedImageFragment } from '../../apollo/images/generated/AttachedImage.fragment';
import { getImagePath } from '../../utils/image.utils';

interface Props {
  image: AttachedImageFragment;
  marginBottom?: string | number;
  width?: string | number;
}

const AttachedImage = ({ image, marginBottom, width = '100%' }: Props) => (
  <LazyLoadImage
    alt={image.filename}
    effect="blur"
    src={getImagePath(image.id)}
    style={{ display: 'block', marginBottom }}
    width={width}
  />
);

export default AttachedImage;

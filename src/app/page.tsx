import { loadMore } from './actions';
import _Home from './_page';

export default function Home() {
  return <_Home loadMore={loadMore} />
}

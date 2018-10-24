import { loadState } from './loadState';

const pageRendering = (req, res) => {
    loadState(req, 'en')
};
export default pageRendering;

import metadata from '../../constants/metadata';

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(metadata);
}

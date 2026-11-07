import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { EVENT } from '../data/invitation';

interface Props {
  onContinue: () => void;
}

export default function InvitationScene({ onContinue: _onContinue }: Props) {
  return (
    <motion.section
      className="scene invitation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>
      <motion.article
        className="parchment"
        initial={{ scaleY: 0.1, opacity: 0, filter: 'brightness(2)' }}
        animate={{ scaleY: 1, opacity: 1, filter: 'brightness(1)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ originY: 0 }}>
        <div className="ribbon" aria-hidden />
        <div className="invite-grid">
          <div className="invite-text">
            <Typography
              variant="h1"
              className="event-title"
              dir="rtl"
              lang="ar"
              sx={{
                fontFamily: '"Noto Naskh Arabic", serif',
                fontWeight: 400,
                whiteSpace: 'pre-line',
                fontSize: { xs: '1.6rem', md: '2.5rem' },
              }}>
              {EVENT.title}
            </Typography>
            <div className="hosts" dir="rtl">
              {EVENT.hosts.map((host) => (
                <div className="host" key={host.name}>
                  <p className="host-honorific">{host.honorific}</p>
                  <p className="host-name">{host.name}</p>
                </div>
              ))}
            </div>
            <Typography
              dir="rtl"
              lang="ar"
              sx={{ mt: 2, px: 8, whiteSpace: 'pre-line' }}>
              {EVENT.intro}
            </Typography>

            <p className="names" dir="rtl" lang="ar">
              {EVENT.names}
            </p>
            <Typography sx={{ fontSize: '1.5rem' }}>{EVENT.date}</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
              {EVENT.time}
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
              {EVENT.venue}
            </Typography>
            <Typography>
              <a href={EVENT.mapUrl} target="_blank" rel="noopener noreferrer">
                📍 {EVENT.address}
              </a>
            </Typography>
            <Typography className="closing">{EVENT.closing}</Typography>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
}

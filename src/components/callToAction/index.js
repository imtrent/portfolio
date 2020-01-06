import React from 'react';
import { Link } from 'gatsby';

const CTA = () => (
    <div class="cta">
        <div>
            <h3>Let&apos;s get started on your next project.</h3>
            <p>
                Have an idea you want to turn into a reality? Let&apos;s talk.
            </p>
        </div>
        <div>
            <Link to="/contact">Contact Me</Link>
        </div>
    </div>
);

export default CTA;

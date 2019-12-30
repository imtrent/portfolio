import React from 'react';
import { Link } from 'gatsby';
import { CTAWrapper, CTATitle, CTADescription } from './styles';
import { Title } from '../settings/styles';


const CTA = () => (
    <CTAWrapper>
        <div>
            <CTATitle>Let&apos;s get started on your next project.</CTATitle>
            <CTADescription>
                Have an idea you want to turn into a reality? Let&apos;s talk.
            </CTADescription>
        </div>
        <div>
            <Link to="/contact">Contact Me</Link>
        </div>
    </CTAWrapper>
);

export default CTA;

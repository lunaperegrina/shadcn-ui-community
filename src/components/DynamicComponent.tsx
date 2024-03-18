import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const DynamicComponent = ({ slug, children }: { slug: string, children?: React.ReactNode }) => {

  const components: {
    [key: string]: React.FC;
  } = {
    "button": Button,
    "switch": Switch,
  };

  const Component = components[slug];

  return Component ? <Component /> : null;
};

export default DynamicComponent;

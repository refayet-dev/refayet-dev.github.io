import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillSectionProps {
  title: string;
  description: string;
  skills: string[];
  icon: () => React.ReactNode;
}

export function SkillSection({ title, description, skills, icon: Icon }: SkillSectionProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-primary">
          <Icon />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
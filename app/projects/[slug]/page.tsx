import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl.src],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.link && (
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => {
                    const [featureName, featureDescription] = feature.includes(
                      ":"
                    )
                      ? feature.split(": ").map((s) => s.trim())
                      : [null, feature];
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          {featureName ? (
                            <>
                              <span className="font-semibold text-foreground">
                                {featureName}:
                              </span>{" "}
                              <span className="text-muted-foreground">
                                {featureDescription}
                              </span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Technologies Used Section */}
          {project.technologiesUsed && project.technologiesUsed.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.technologiesUsed.map((tech, index) => {
                    const [techCategory, techDetails] = tech.includes(":")
                      ? tech.split(": ").map((s) => s.trim())
                      : [null, tech];
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          {techCategory ? (
                            <>
                              <span className="font-semibold text-foreground">
                                {techCategory}:
                              </span>{" "}
                              <span className="text-muted-foreground">
                                {techDetails}
                              </span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">
                              {tech}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Business Impact Section */}
          {project.businessImpact && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Business Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {project.businessImpact}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

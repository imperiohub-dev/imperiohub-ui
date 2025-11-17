/**
 * @fileoverview Professional Layout
 * @version 0.4.0
 * @description Layout optimizado para profesionales autónomos
 */

import React from 'react'
import type { TemplateConfig } from '../core/types'
import {
  Hero,
  Features,
  ServicesSection,
  Testimonials,
  TeamSection,
  StatsSection,
  FAQSection,
  Pricing,
  Contact,
  CTA,
} from '../../sections'

export interface ProfessionalLayoutProps {
  config: TemplateConfig
}

/**
 * ProfessionalLayout - Layout para profesionales autónomos
 *
 * Diseñado para: abogados, doctores, arquitectos, consultores, etc.
 */
export const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({
  config,
}) => {
  const { variables, sections } = config

  // Helper para verificar si una sección está habilitada
  const isEnabled = (sectionName: string): boolean => {
    return sections[sectionName]?.enabled ?? false
  }

  return (
    <div className="professional-layout">
      {/* Hero Section */}
      {isEnabled('hero') && (
        <Hero
          title={variables.professionalName || variables.businessName || 'Professional'}
          subtitle={variables.profession || ''}
          description={variables.tagline}
          primaryCTA={{
            text: 'Agendar Consulta',
            href: '#contact',
          }}
          secondaryCTA={{
            text: 'Conocer Más',
            href: '#about',
          }}
          variant={sections.hero?.variant || 'professional'}
          backgroundImage={variables.heroImage}
        />
      )}

      {/* About / Experience Section */}
      {isEnabled('about') && variables.description && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Sobre {variables.professionalName || 'Nosotros'}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {variables.description}
                </p>
                {variables.yearsExperience && (
                  <p className="text-xl font-semibold text-primary">
                    {variables.yearsExperience}+ años de experiencia
                  </p>
                )}
                {variables.specialties && variables.specialties.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Especialidades:</h3>
                    <ul className="space-y-2">
                      {variables.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {variables.logo && (
                <div className="flex justify-center">
                  <img
                    src={variables.logo}
                    alt="Professional"
                    className="max-w-md rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {isEnabled('experience') && variables.yearsExperience && (
        <StatsSection
          stats={[
            {
              id: '1',
              value: `${variables.yearsExperience}+`,
              label: 'Años de Experiencia',
              icon: 'Award',
            },
            ...(variables.testimonials
              ? [
                  {
                    id: '2',
                    value: `${variables.testimonials.length}+`,
                    label: 'Clientes Satisfechos',
                    icon: 'Users',
                  },
                ]
              : []),
            ...(variables.services
              ? [
                  {
                    id: '3',
                    value: `${variables.services.length}`,
                    label: 'Servicios Especializados',
                    icon: 'Briefcase',
                  },
                ]
              : []),
          ]}
        />
      )}

      {/* Services Section */}
      {isEnabled('services') && variables.services && variables.services.length > 0 && (
        <ServicesSection
          title="Servicios Profesionales"
          description="Soluciones especializadas adaptadas a tus necesidades"
          services={variables.services.map((service) => ({
            id: service.id,
            title: service.name,
            description: service.description,
            icon: service.icon || 'Briefcase',
            features: service.features || [],
          }))}
          columns={sections.services?.columns || 3}
          variant={sections.services?.variant || 'default'}
        />
      )}

      {/* Certifications */}
      {isEnabled('certifications') &&
        variables.certifications &&
        variables.certifications.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Certificaciones y Credenciales
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {variables.certifications.map((cert, idx) => {
                  const certText = typeof cert === 'string' ? cert : cert.name
                  return (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-lg shadow-md text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold">{certText}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

      {/* Testimonials */}
      {isEnabled('testimonials') &&
        variables.testimonials &&
        variables.testimonials.length > 0 && (
          <Testimonials
            title="Lo que dicen nuestros clientes"
            testimonials={variables.testimonials.map((t) => ({
              id: t.id,
              name: t.name,
              role: t.role,
              content: t.content,
              rating: t.rating || 5,
              avatar: t.avatar,
            }))}
            variant={sections.testimonials?.variant || 'default'}
          />
        )}

      {/* Team */}
      {isEnabled('team') && variables.team && variables.team.length > 0 && (
        <TeamSection
          title="Nuestro Equipo"
          description="Profesionales dedicados a tu servicio"
          members={variables.team.map((member) => ({
            id: member.id,
            name: member.name,
            role: member.role,
            bio: member.bio || '',
            image: member.avatar || '',
            social: {
              linkedin: member.social?.linkedin,
              twitter: member.social?.twitter,
            },
          }))}
        />
      )}

      {/* Portfolio/Projects */}
      {isEnabled('portfolio') &&
        variables.projects &&
        variables.projects.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Proyectos Destacados
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {variables.projects.slice(0, 6).map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="text-sm text-primary font-semibold mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Pricing */}
      {isEnabled('pricing') && variables.services && (
        <Pricing
          title="Tarifas Profesionales"
          plans={variables.services
            .filter((s) => s.price)
            .map((service) => ({
              id: service.id,
              name: service.name,
              price: service.price!.amount,
              currency: service.price!.currency,
              period: service.price!.period || 'hour',
              features: service.features || [service.description],
              highlighted: service.highlighted,
              cta: {
                text: 'Consultar',
                href: '#contact',
              },
            }))}
          variant={sections.pricing?.variant || 'default'}
        />
      )}

      {/* FAQ */}
      {isEnabled('faq') && variables.faq && variables.faq.length > 0 && (
        <FAQSection
          title="Preguntas Frecuentes"
          description="Resolvemos tus dudas más comunes"
          faqs={variables.faq.map((faq) => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}

      {/* Contact Section */}
      {isEnabled('contact') && variables.contact && (
        <Contact
          title="Agenda tu Consulta"
          description="Estamos listos para ayudarte"
          email={variables.contact.email}
          phone={variables.contact.phone}
          address={
            variables.contact.address
              ? `${variables.contact.address.street}, ${variables.contact.address.city}, ${variables.contact.address.country}`
              : undefined
          }
          social={variables.social}
          showMap={sections.contact?.showMap}
        />
      )}

      {/* Footer CTA */}
      {isEnabled('footer') && (
        <CTA
          title="¿Listo para comenzar?"
          description="Agenda tu consulta hoy mismo"
          primaryCTA={{
            text: 'Contactar Ahora',
            href: '#contact',
          }}
          variant={sections.footer?.variant || 'default'}
        />
      )}
    </div>
  )
}

ProfessionalLayout.displayName = 'ProfessionalLayout'

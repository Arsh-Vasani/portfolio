import { Language } from '@/data/resumeData';

interface LanguagesProps {
  languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Native':
        return 'bg-green-500';
      case 'Fluent':
        return 'bg-blue-500';
      case 'Advanced':
        return 'bg-purple-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Basic':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'Native':
        return 'w-full';
      case 'Fluent':
        return 'w-4/5';
      case 'Advanced':
        return 'w-3/5';
      case 'Intermediate':
        return 'w-2/5';
      case 'Basic':
        return 'w-1/5';
      default:
        return 'w-1/5';
    }
  };

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
          </svg>
          Languages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{language.name}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-medium text-gray-800">{language.proficiency}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProficiencyColor(language.proficiency)} ${getProficiencyWidth(language.proficiency)}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

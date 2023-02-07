using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_bshorne.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float group { get; set; }
        [Required]
        [Range(0, 100)]
        public float quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float mid { get; set; }
        [Required]
        [Range(0, 100)]
        public float final { get; set; }
        [Required]
        [Range(0, 100)]
        public float intex { get; set; }
    }
}
